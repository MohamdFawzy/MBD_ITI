/*
 * File: AlgorthmicCalculator.c
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

#include "AlgorthmicCalculator.h"

/* Include model header file for global data */
#include "CalculatorSubSys.h"
#include "CalculatorSubSys_private.h"

/* Output and update for atomic system: '<Root>/AlgorthmicCalculator' */
void Calculator_AlgorthmicCalculator(uint8_T rtu_In1, uint8_T rtu_In2,
  B_AlgorthmicCalculator_Calcul_T *localB)
{
  /* Sum: '<S1>/Add' */
  localB->Add = (uint8_T)((uint32_T)rtu_In1 + rtu_In2);

  /* Product: '<S1>/Divide' */
  localB->Divide = (uint8_T)(rtu_In2 == 0U ? MAX_uint32_T : (uint32_T)rtu_In1 /
    rtu_In2);

  /* DotProduct: '<S1>/Dot Product' */
  localB->DotProduct = (uint16_T)((uint32_T)rtu_In1 * rtu_In2);

  /* Product: '<S1>/Product' */
  localB->Product = (uint16_T)((uint32_T)rtu_In1 * rtu_In2);

  /* Sum: '<S1>/Subtract' */
  localB->Subtract = (uint8_T)(rtu_In1 - rtu_In2);
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
