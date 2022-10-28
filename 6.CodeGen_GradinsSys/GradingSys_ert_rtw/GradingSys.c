/*
 * File: GradingSys.c
 *
 * Code generated for Simulink model 'GradingSys'.
 *
 * Model version                  : 1.6
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Sat Oct 29 00:53:52 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. ROM efficiency
 *    3. MISRA C:2012 guidelines
 * Validation result: Not run
 */

#include "GradingSys.h"
#include "GradingSys_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_GradingSys_T GradingSys_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_GradingSys_T GradingSys_Y;

/* Model step function */
void GradingSys_step(void)
{
  /* SwitchCase: '<Root>/Switch Case' incorporates:
   *  Gain: '<Root>/Gain'
   *  Inport: '<Root>/In1'
   */
  switch ((int32_T)(205U * GradingSys_U.In1 >> 11)) {
   case 9:
    /* Outputs for IfAction SubSystem: '<Root>/Switch Case Action Subsystem' incorporates:
     *  ActionPort: '<S1>/Action Port'
     */
    /* Outport: '<Root>/Out1' incorporates:
     *  Constant: '<Root>/Constant'
     *  Inport: '<S1>/In1'
     */
    GradingSys_Y.Out1 = 65U;

    /* End of Outputs for SubSystem: '<Root>/Switch Case Action Subsystem' */
    break;

   case 8:
    /* Outputs for IfAction SubSystem: '<Root>/Switch Case Action Subsystem1' incorporates:
     *  ActionPort: '<S2>/Action Port'
     */
    /* Outport: '<Root>/Out1' incorporates:
     *  Constant: '<Root>/Constant1'
     *  Inport: '<S2>/In1'
     */
    GradingSys_Y.Out1 = 66U;

    /* End of Outputs for SubSystem: '<Root>/Switch Case Action Subsystem1' */
    break;

   case 7:
    /* Outputs for IfAction SubSystem: '<Root>/Switch Case Action Subsystem2' incorporates:
     *  ActionPort: '<S3>/Action Port'
     */
    /* Outport: '<Root>/Out1' incorporates:
     *  Constant: '<Root>/Constant2'
     *  Inport: '<S3>/In1'
     */
    GradingSys_Y.Out1 = 67U;

    /* End of Outputs for SubSystem: '<Root>/Switch Case Action Subsystem2' */
    break;

   case 6:
    /* Outputs for IfAction SubSystem: '<Root>/Switch Case Action Subsystem3' incorporates:
     *  ActionPort: '<S4>/Action Port'
     */
    /* Outport: '<Root>/Out1' incorporates:
     *  Constant: '<Root>/Constant3'
     *  Inport: '<S4>/In1'
     */
    GradingSys_Y.Out1 = 68U;

    /* End of Outputs for SubSystem: '<Root>/Switch Case Action Subsystem3' */
    break;

   case 5:
    /* Outputs for IfAction SubSystem: '<Root>/Switch Case Action Subsystem4' incorporates:
     *  ActionPort: '<S5>/Action Port'
     */
    /* Outport: '<Root>/Out1' incorporates:
     *  Constant: '<Root>/Constant4'
     *  Inport: '<S5>/In1'
     */
    GradingSys_Y.Out1 = 69U;

    /* End of Outputs for SubSystem: '<Root>/Switch Case Action Subsystem4' */
    break;

   default:
    /* Outputs for IfAction SubSystem: '<Root>/Switch Case Action Subsystem5' incorporates:
     *  ActionPort: '<S6>/Action Port'
     */
    /* Outport: '<Root>/Out1' incorporates:
     *  Constant: '<Root>/Constant5'
     *  Inport: '<S6>/In1'
     */
    GradingSys_Y.Out1 = 70U;

    /* End of Outputs for SubSystem: '<Root>/Switch Case Action Subsystem5' */
    break;
  }

  /* End of SwitchCase: '<Root>/Switch Case' */
}

/* Model initialize function */
void GradingSys_initialize(void)
{
  /* Registration code */

  /* external inputs */
  GradingSys_U.In1 = 0U;

  /* external outputs */
  GradingSys_Y.Out1 = 0U;
}

/* Model terminate function */
void GradingSys_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
