/*
 * File: CodeGen_Factorial.c
 *
 * Code generated for Simulink model 'CodeGen_Factorial'.
 *
 * Model version                  : 1.1
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Sat Oct 29 23:21:54 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. ROM efficiency
 *    3. MISRA C:2012 guidelines
 * Validation result: Not run
 */

#include "CodeGen_Factorial.h"
#include "CodeGen_Factorial_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_CodeGen_Factorial_T CodeGen_Factorial_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_CodeGen_Factorial_T CodeGen_Factorial_Y;

/* Model step function */
void CodeGen_Factorial_step(void)
{
  int8_T s1_iter;
  uint16_T UnitDelay_DSTATE;

  /* Outputs for Iterator SubSystem: '<Root>/For Iterator Subsystem' incorporates:
   *  ForIterator: '<S1>/For Iterator'
   */
  /* InitializeConditions for UnitDelay: '<S1>/Unit Delay' */
  UnitDelay_DSTATE = 1U;

  /* Inport: '<Root>/In1' */
  for (s1_iter = 1; s1_iter <= CodeGen_Factorial_U.In1; s1_iter++) {
    /* Outport: '<Root>/Out1' incorporates:
     *  Product: '<S1>/Product'
     *  UnitDelay: '<S1>/Unit Delay'
     */
    CodeGen_Factorial_Y.Out1 = (uint16_T)(s1_iter * UnitDelay_DSTATE);

    /* Update for UnitDelay: '<S1>/Unit Delay' */
    UnitDelay_DSTATE = CodeGen_Factorial_Y.Out1;
  }

  /* End of Inport: '<Root>/In1' */
  /* End of Outputs for SubSystem: '<Root>/For Iterator Subsystem' */
}

/* Model initialize function */
void CodeGen_Factorial_initialize(void)
{
  /* Registration code */

  /* external inputs */
  CodeGen_Factorial_U.In1 = 0;

  /* external outputs */
  CodeGen_Factorial_Y.Out1 = 0U;
}

/* Model terminate function */
void CodeGen_Factorial_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
