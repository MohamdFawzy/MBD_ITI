/*
 * File: BitwiseCalculator.c
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

#include "BitwiseCalculator.h"

/* Include model header file for global data */
#include "CalculatorSubSys.h"
#include "CalculatorSubSys_private.h"

/* Output and update for atomic system: '<Root>/BitwiseCalculator' */
void CalculatorSub_BitwiseCalculator(uint8_T rtu_In1, uint8_T rtu_In2,
  B_BitwiseCalculator_Calculato_T *localB)
{
  /* S-Function (sfix_bitop): '<S2>/Bitwise Operator' */
  localB->BitwiseOperator = (uint8_T)(rtu_In1 & rtu_In2);

  /* S-Function (sfix_bitop): '<S2>/Bitwise Operator1' */
  localB->BitwiseOperator1 = (uint8_T)(rtu_In1 | rtu_In2);

  /* S-Function (sfix_bitop): '<S2>/Bitwise Operator2' */
  localB->BitwiseOperator2 = (uint8_T)(rtu_In1 ^ rtu_In2);

  /* S-Function (sfix_bitop): '<S2>/Bitwise Operator3' */
  localB->BitwiseOperator3 = (uint8_T)~(uint8_T)(rtu_In1 | rtu_In2);

  /* S-Function (sfix_bitop): '<S2>/Bitwise Operator4' */
  localB->BitwiseOperator4 = (uint8_T)~rtu_In1;
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
