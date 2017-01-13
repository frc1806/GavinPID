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

import com.qualcomm.robotcore.eventloop.opmode.Disabled;
import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;
import com.qualcomm.robotcore.hardware.ColorSensor;
import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.DcMotorSimple;
import com.qualcomm.robotcore.hardware.Gamepad;
import com.qualcomm.robotcore.hardware.I2cDevice;
import com.qualcomm.robotcore.hardware.OpticalDistanceSensor;
import com.qualcomm.robotcore.util.ElapsedTime;
import com.kauailabs.navx.ftc.AHRS;

import java.text.DecimalFormat;


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

@TeleOp(name="Main TeleOp", group="Linear Opmode")  // @Autonomous(...) is the other common choice
public class TeleOp_Main extends LinearOpMode {

    /* Declare OpMode members. */
    private ElapsedTime runtime = new ElapsedTime();

    DcMotor leftMotor;
    DcMotor rightMotor;
    //DcMotor flyWheelMotor;
    //DcMotor turretMotor;

    ColorSensor colorSensorLeft;
    ColorSensor colorSensorRight;
    AHRS navx_mxp;

    OpticalDistanceSensor opticalDistanceSensorMain;


    @Override
    public void runOpMode() {
        leftMotor  = hardwareMap.dcMotor.get("left_drive");
        rightMotor = hardwareMap.dcMotor.get("right_drive");
        rightMotor.setDirection(DcMotorSimple.Direction.REVERSE);

        //flyWheelMotor = hardwareMap.dcMotor.get("fly_wheel");
        //turretMotor = hardwareMap.dcMotor.get("turret");

        colorSensorLeft = hardwareMap.colorSensor.get("color_left");
        colorSensorRight = hardwareMap.colorSensor.get("color_right");

        opticalDistanceSensorMain = hardwareMap.opticalDistanceSensor.get("optical_distance_sensor");

        navx_mxp = AHRS.getInstance(hardwareMap.deviceInterfaceModule.get("dim"), 2, AHRS.DeviceDataType.kProcessedData);

        telemetry.addData("Status", "Initialized");
        telemetry.update();

        // Wait for the game to start (driver presses PLAY)
        waitForStart();
        runtime.reset();

        // run until the end of the match (driver presses STOP)
        while (opModeIsActive()) {
            boolean connected = navx_mxp.isConnected();
            String gyrocal, magcal, yaw, pitch, roll, compass_heading;
            String fused_heading, ypr, cf, motion;
            DecimalFormat df = new DecimalFormat("#.##");

            arcadeDrive(gamepad1.right_stick_x, gamepad1.left_stick_y  , 0.2);

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

            telemetry.addData("2 GyroAccel", gyrocal );
            telemetry.addData("3 Y,P,R", ypr);
            telemetry.addData("4 Magnetometer", magcal );
            telemetry.addData("5 Compass,9Axis", cf );
            telemetry.addData("6 Motion", motion);
            telemetry.addData("Status", "Run Time: " + runtime.toString());
            telemetry.addData("Left Sensor Alpha: ", colorSensorLeft.alpha());
            telemetry.addData("Right Sensor Alpha: ", colorSensorRight.alpha());
            telemetry.addData("1 navX-Device", connected ? "Connected" : "Disconnected" );
            telemetry.update();

        }

        //Stop the nav x
        navx_mxp.close();
    }

    public void arcadeDrive(double x, double y, double deadZone){

        if((Math.abs(y) > deadZone) && (Math.abs(x) > deadZone)){
            leftMotor.setPower(((y / 2) - (x / 2)));
            rightMotor.setPower(((y / 2) + (x / 2)));
        } else if((Math.abs(y) > deadZone) && (Math.abs(x) < deadZone)){
            leftMotor.setPower(y);
            rightMotor.setPower(y);
        } else if((Math.abs(y) < deadZone) && (Math.abs(x) > deadZone)){
            leftMotor.setPower(-x);
            rightMotor.setPower(x);
        } else {
            leftMotor.setPower(0);
            rightMotor.setPower(0);
        }
    }
}
