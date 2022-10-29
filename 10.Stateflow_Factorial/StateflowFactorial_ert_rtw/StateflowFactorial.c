/*
 * File: StateflowFactorial.c
 *
 * Code generated for Simulink model 'StateflowFactorial'.
 *
 * Model version                  : 1.3
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Sun Oct 30 00:51:41 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. ROM efficiency
 *    3. MISRA C:2012 guidelines
 * Validation result: Not run
 */

#include "StateflowFactorial.h"
#include "StateflowFactorial_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_StateflowFactorial_T StateflowFactorial_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_StateflowFactorial_T StateflowFactorial_Y;

/* Model step function */
void StateflowFactorial_step(void)
{
  uint8_T i;
  real_T rtb_out;

  /* Chart: '<Root>/Chart' incorporates:
   *  Inport: '<Root>/In1'
   */
  /* Gateway: Chart */
  /* During: Chart */
  /* Entry Internal: Chart */
  /* Transition: '<S1>:17' */
  /*  Factorial */
  /* Transition: '<S1>:20' */
  rtb_out = 1.0;
  for (i = StateflowFactorial_U.In1; i > 0; i--) {
    /* Transition: '<S1>:18' */
    /* Transition: '<S1>:19' */
    rtb_out *= (real_T)i;

    /* Transition: '<S1>:21' */
  }

  /* End of Chart: '<Root>/Chart' */

  /* Outport: '<Root>/Out1' */
  /* Transition: '<S1>:22' */
  StateflowFactorial_Y.Out1 = rtb_out;
}

/* Model initialize function */
void StateflowFactorial_initialize(void)
{
  /* Registration code */

  /* external inputs */
  StateflowFactorial_U.In1 = 0U;

  /* external outputs */
  StateflowFactorial_Y.Out1 = 0.0;
}

/* Model terminate function */
void StateflowFactorial_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
