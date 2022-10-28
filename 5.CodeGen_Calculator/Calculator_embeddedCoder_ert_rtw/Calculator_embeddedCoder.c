/*
 * File: Calculator_embeddedCoder.c
 *
 * Code generated for Simulink model 'Calculator_embeddedCoder'.
 *
 * Model version                  : 1.0
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Sat Oct 29 00:24:02 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. ROM efficiency
 *    3. MISRA C:2012 guidelines
 * Validation result: Not run
 */

#include "Calculator_embeddedCoder.h"
#include "Calculator_embeddedCoder_private.h"

/* External inputs (root inport signals with auto storage) */
ExtU_Calculator_embeddedCoder_T Calculator_embeddedCoder_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_Calculator_embeddedCoder_T Calculator_embeddedCoder_Y;

/* Model step function */
void Calculator_embeddedCoder_step(void)
{
  /* Outport: '<Root>/Out1' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Sum: '<Root>/Add'
   */
  Calculator_embeddedCoder_Y.Out1 = (uint8_T)((uint32_T)
    Calculator_embeddedCoder_U.In1 + Calculator_embeddedCoder_U.In2);

  /* Outport: '<Root>/Out2' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Sum: '<Root>/Subtract'
   */
  Calculator_embeddedCoder_Y.Out2 = (uint8_T)(Calculator_embeddedCoder_U.In1 -
    Calculator_embeddedCoder_U.In2);

  /* Outport: '<Root>/Out3' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Product: '<Root>/Product'
   */
  Calculator_embeddedCoder_Y.Out3 = (uint16_T)((uint32_T)
    Calculator_embeddedCoder_U.In1 * Calculator_embeddedCoder_U.In2);

  /* Outport: '<Root>/Out4' incorporates:
   *  DotProduct: '<Root>/Dot Product'
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   */
  Calculator_embeddedCoder_Y.Out4 = (uint16_T)((uint32_T)
    Calculator_embeddedCoder_U.In1 * Calculator_embeddedCoder_U.In2);

  /* Outport: '<Root>/Out5' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   *  Product: '<Root>/Divide'
   */
  Calculator_embeddedCoder_Y.Out5 = (uint8_T)(Calculator_embeddedCoder_U.In2 ==
    0U ? MAX_uint32_T : (uint32_T)Calculator_embeddedCoder_U.In1 /
    Calculator_embeddedCoder_U.In2);
}

/* Model initialize function */
void Calculator_embeddedCoder_initialize(void)
{
  /* Registration code */

  /* external inputs */
  (void) memset((void *)&Calculator_embeddedCoder_U, 0,
                sizeof(ExtU_Calculator_embeddedCoder_T));

  /* external outputs */
  (void) memset((void *)&Calculator_embeddedCoder_Y, 0,
                sizeof(ExtY_Calculator_embeddedCoder_T));
}

/* Model terminate function */
void Calculator_embeddedCoder_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
