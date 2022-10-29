/*
 * File: BitwiseCalculator.h
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

#ifndef RTW_HEADER_BitwiseCalculator_h_
#define RTW_HEADER_BitwiseCalculator_h_
#ifndef CalculatorSubSys_COMMON_INCLUDES_
# define CalculatorSubSys_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* CalculatorSubSys_COMMON_INCLUDES_ */

#include "CalculatorSubSys_types.h"

/* Block signals for system '<Root>/BitwiseCalculator' */
typedef struct {
  uint8_T BitwiseOperator;             /* '<S2>/Bitwise Operator' */
  uint8_T BitwiseOperator1;            /* '<S2>/Bitwise Operator1' */
  uint8_T BitwiseOperator2;            /* '<S2>/Bitwise Operator2' */
  uint8_T BitwiseOperator3;            /* '<S2>/Bitwise Operator3' */
  uint8_T BitwiseOperator4;            /* '<S2>/Bitwise Operator4' */
} B_BitwiseCalculator_Calculato_T;

extern void CalculatorSub_BitwiseCalculator(uint8_T rtu_In1, uint8_T rtu_In2,
  B_BitwiseCalculator_Calculato_T *localB);

#endif                                 /* RTW_HEADER_BitwiseCalculator_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
