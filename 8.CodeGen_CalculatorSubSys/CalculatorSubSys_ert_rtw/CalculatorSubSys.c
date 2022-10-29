/*
 * File: CalculatorSubSys.c
 *
 * Code generated for Simulink model 'CalculatorSubSys'.
 *
 * Model version                  : 1.7
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Sat Oct 29 22:24:37 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. ROM efficiency
 *    3. MISRA C:2012 guidelines
 * Validation result: Not run
 */

#include "CalculatorSubSys.h"
#include "CalculatorSubSys_private.h"

/* Block signals (auto storage) */
B_CalculatorSubSys_T CalculatorSubSys_B;

/* External inputs (root inport signals with auto storage) */
ExtU_CalculatorSubSys_T CalculatorSubSys_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_CalculatorSubSys_T CalculatorSubSys_Y;

/* Model step function */
void CalculatorSubSys_step(void)
{
  /* Outputs for Atomic SubSystem: '<Root>/AlgorthmicCalculator' */

  /* Inport: '<Root>/In1' incorporates:
   *  Inport: '<Root>/In2'
   */
  Calculator_AlgorthmicCalculator(CalculatorSubSys_U.In1, CalculatorSubSys_U.In2,
    &CalculatorSubSys_B.AlgorthmicCalculator);

  /* End of Outputs for SubSystem: '<Root>/AlgorthmicCalculator' */

  /* Outport: '<Root>/Out1' */
  CalculatorSubSys_Y.Out1 = CalculatorSubSys_B.AlgorthmicCalculator.Add;

  /* Outport: '<Root>/Out2' */
  CalculatorSubSys_Y.Out2 = CalculatorSubSys_B.AlgorthmicCalculator.Subtract;

  /* Outport: '<Root>/Out3' */
  CalculatorSubSys_Y.Out3 = CalculatorSubSys_B.AlgorthmicCalculator.Product;

  /* Outport: '<Root>/Out4' */
  CalculatorSubSys_Y.Out4 = CalculatorSubSys_B.AlgorthmicCalculator.DotProduct;

  /* Outport: '<Root>/Out5' */
  CalculatorSubSys_Y.Out5 = CalculatorSubSys_B.AlgorthmicCalculator.Divide;

  /* Outputs for Atomic SubSystem: '<Root>/BitwiseCalculator' */

  /* Inport: '<Root>/In1' incorporates:
   *  Inport: '<Root>/In2'
   */
  CalculatorSub_BitwiseCalculator(CalculatorSubSys_U.In1, CalculatorSubSys_U.In2,
    &CalculatorSubSys_B.BitwiseCalculator);

  /* End of Outputs for SubSystem: '<Root>/BitwiseCalculator' */

  /* Outport: '<Root>/Out6' */
  CalculatorSubSys_Y.Out6 = CalculatorSubSys_B.BitwiseCalculator.BitwiseOperator;

  /* Outport: '<Root>/Out7' */
  CalculatorSubSys_Y.Out7 =
    CalculatorSubSys_B.BitwiseCalculator.BitwiseOperator1;

  /* Outport: '<Root>/Out8' */
  CalculatorSubSys_Y.Out8 =
    CalculatorSubSys_B.BitwiseCalculator.BitwiseOperator2;

  /* Outport: '<Root>/Out9' */
  CalculatorSubSys_Y.Out9 =
    CalculatorSubSys_B.BitwiseCalculator.BitwiseOperator3;

  /* Outport: '<Root>/Out10' */
  CalculatorSubSys_Y.Out10 =
    CalculatorSubSys_B.BitwiseCalculator.BitwiseOperator4;
}

/* Model initialize function */
void CalculatorSubSys_initialize(void)
{
  /* Registration code */

  /* block I/O */
  (void) memset(((void *) &CalculatorSubSys_B), 0,
                sizeof(B_CalculatorSubSys_T));

  /* external inputs */
  (void) memset((void *)&CalculatorSubSys_U, 0,
                sizeof(ExtU_CalculatorSubSys_T));

  /* external outputs */
  (void) memset((void *)&CalculatorSubSys_Y, 0,
                sizeof(ExtY_CalculatorSubSys_T));
}

/* Model terminate function */
void CalculatorSubSys_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
