/*
Copyright (c) 2016 Robert Atkinson

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted (subject to the limitations in the disclaimer below) provided that
the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list
of conditions and the following disclaimer.

Redistributions in binary form must reproduce the above copyright notice, this
list of conditions and the following disclaimer in the documentation and/or
other materials provided with the distribution.

Neither the name of Robert Atkinson nor the names of his contributors may be used to
endorse or promote products derived from this software without specific prior
written permission.

NO EXPRESS OR IMPLIED LICENSES TO ANY PARTY'S PATENT RIGHTS ARE GRANTED BY THIS
LICENSE. THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESSFOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
package org.firstinspires.ftc.teamcode;

import android.util.Log;

import com.kauailabs.navx.ftc.AHRS;
import com.kauailabs.navx.ftc.navXPIDController;
import com.qualcomm.robotcore.eventloop.opmode.Autonomous;
import com.qualcomm.robotcore.eventloop.opmode.Disabled;
import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.hardware.ColorSensor;
import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.DcMotorSimple;
import com.qualcomm.robotcore.hardware.OpticalDistanceSensor;
import com.qualcomm.robotcore.util.ElapsedTime;

import java.text.DecimalFormat;
import java.util.Timer;

/**
 * This file contains an minimal example of a Linear "OpMode". An OpMode is a 'program' that runs in either
 * the autonomous or the teleop period of an FTC match. The names of OpModes appear on the menu
 * of the FTC Driver Station. When an selection is made from the menu, the corresponding OpMode
 * class is instantiated on the Robot Controller and executed.
 *
 * This particular OpMode just executes a basic Tank Drive Teleop for a PushBot
 * It includes all the skeletal structure that all linear OpModes contain.
 *
 * Use Android Studios to Copy this Class, and Paste it into your team's code folder with a new name.
 * Remove or comment out the @Disabled line to add this opmode to the Driver Station OpMode list
 */

@Autonomous(name="Main Auto", group="Linear Opmode")  // @Autonomous(...) is the other common choice
public class Auto_Main extends LinearOpMode {

    /* Declare OpMode members. */
    private ElapsedTime runtime = new ElapsedTime();

    DcMotor leftMotor;
    DcMotor rightMotor;
    //DcMotor flyWheelMotor;
    //DcMotor turretMotor;

    ColorSensor colorSensorLeft;
    ColorSensor colorSensorRight;
    AHRS navx_mxp;

    private navXPIDController yawPIDControllerStraight;
    private boolean calibration_complete = false;

    OpticalDistanceSensor opticalDistanceSensorMain;

    //All the rate of change variables
    int numberOfRateOfChangeLoops = 0;
    double oldValue = 0;
    double newValue = 0;
    double rateOfChangeOfInput = 0;
    double changeInInput = 0;
    double changeInTime = 0.2;
    ElapsedTime timer = new ElapsedTime();

    //All the PID variables

    @Override
    public void runOpMode() {
        leftMotor = hardwareMap.dcMotor.get("left_drive");
        rightMotor = hardwareMap.dcMotor.get("right_drive");
        leftMotor.setDirection(DcMotorSimple.Direction.REVERSE);

        //flyWheelMotor = hardwareMap.dcMotor.get("fly_wheel");
        //turretMotor = hardwareMap.dcMotor.get("turret");

        colorSensorLeft = hardwareMap.colorSensor.get("color_left");
        colorSensorRight = hardwareMap.colorSensor.get("color_right");

        opticalDistanceSensorMain = hardwareMap.opticalDistanceSensor.get("optical_distance_sensor");

        navx_mxp = AHRS.getInstance(hardwareMap.deviceInterfaceModule.get("dim"), 2, AHRS.DeviceDataType.kProcessedData);

        telemetry.addData("Status", "Initialized");
        telemetry.update();


        waitForStart();
        runtime.reset();

        while ( !calibration_complete ) {
            /* navX-Micro Calibration completes automatically ~15 seconds after it is
            powered on, as long as the device is still.  To handle the case where the
            navX-Micro has not been able to calibrate successfully, hold off using
            the navX-Micro Yaw value until calibration is complete.
             */
            calibration_complete = !navx_mxp.isCalibrating();
            if (!calibration_complete) {
                telemetry.addData("navX-MXP", "Startup Calibration in Progress");
                telemetry.update();
            } else {
                telemetry.addData("navX-MXP", "Calibration Finished");
                telemetry.update();
            }
        }

        navx_mxp.zeroYaw();

        // run until the end of the match (driver presses STOP)
        while (opModeIsActive()) {
            boolean connected = navx_mxp.isConnected();
            String gyrocal, magcal, yaw, pitch, roll, compass_heading;
            String fused_heading, ypr, cf, motion;
            DecimalFormat df = new DecimalFormat("#.##");
            double errorChangeYaw = rateOfChange(navx_mxp.getYaw());

            if ( connected ) {
                gyrocal = (navx_mxp.isCalibrating() ?
                        "CALIBRATING" : "Calibration Complete");
                magcal = (navx_mxp.isMagnetometerCalibrated() ?
                        "Calibrated" : "UNCALIBRATED");
                yaw = df.format(navx_mxp.getYaw());
                pitch = df.format(navx_mxp.getPitch());
                roll = df.format(navx_mxp.getRoll());
                ypr = yaw + ", " + pitch + ", " + roll;
                compass_heading = df.format(navx_mxp.getCompassHeading());
                fused_heading = df.format(navx_mxp.getFusedHeading());
                if (!navx_mxp.isMagnetometerCalibrated()) {
                    compass_heading = "-------";
                }
                cf = compass_heading + ", " + fused_heading;
                if ( navx_mxp.isMagneticDisturbance()) {
                    cf += " (Mag. Disturbance)";
                }
                motion = (navx_mxp.isMoving() ? "Moving" : "Not Moving");
                if ( navx_mxp.isRotating() ) {
                    motion += ", Rotating";
                }
            } else {
                gyrocal =
                        magcal =
                                ypr =
                                        cf =
                                                motion = "-------";
            }

            SWATPID(0.001, 0.0, 0.0, navx_mxp.getYaw(), 0, 0.25, 0.0, 0.575, 0.425);

            telemetry.addData("Status", "Run Time: " + runtime.toString());
            telemetry.addData("Current Change in Error ", errorChangeYaw);

            telemetry.update();
        }

        //Stop the nav x
        navx_mxp.close();
    }

    public void SWATPID(double kP, double kI, double kD, double input, double target, double rangeFromTarget, double addInitial, double powerRight, double powerLeft){
        //This takes the above values and runs a PID from those and stops inside the range.
        double error;
        double multipliedP;
        double rateOfChangeOfError;
        double multipliedD;
        double multipliedI;
        double addedI;
        double leftPower;
        double rightPower;

        error = target - input;
        multipliedP = error * kP;
        rateOfChangeOfError = rateOfChange(error);
        multipliedD = rateOfChangeOfError * kD;
        addedI = addInitial;
        addedI =+ error;
        multipliedI = addedI * kI;

        leftPower = powerLeft + multipliedP;
        rightPower = powerRight - multipliedP;
        leftMotor.setPower(leftPower);
        rightMotor.setPower(rightPower);

    }

    public double rateOfChange(double input){
        //This calculates the rate of change of input every 0.2 seconds.


        if(numberOfRateOfChangeLoops == 0){
            oldValue = input;
            newValue = 0;
        } else if((numberOfRateOfChangeLoops != 0) && (newValue == 0)){
            //Get the updated input.
            newValue = input;
        } else if((numberOfRateOfChangeLoops != 0) && (newValue != 0)){
            //Calculate the rate of change if the old and new is set.
            changeInInput = newValue - oldValue;
            rateOfChangeOfInput = changeInInput / changeInTime;

            //Set the old to the new for the next loop.
            oldValue = newValue;
            newValue = 0;

        }

        //A timer for the next cycle
        timer.reset();
        timer.startTime();

        while(timer.seconds() < 0.1){

            //Do nothing!

        }

        numberOfRateOfChangeLoops = numberOfRateOfChangeLoops + 1;
        return rateOfChangeOfInput;

    }

    public double limit(double a) {
        return Math.min(Math.max(a, -1.0), 1.0);
    }
}

// "10/10. Best Code" -IGN
//left is 0.425 and right is 0.575 to drive straight!