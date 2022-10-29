/*
 * File: AlgorthmicCalculator.h
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

#ifndef RTW_HEADER_AlgorthmicCalculator_h_
#define RTW_HEADER_AlgorthmicCalculator_h_
#ifndef CalculatorSubSys_COMMON_INCLUDES_
# define CalculatorSubSys_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* CalculatorSubSys_COMMON_INCLUDES_ */

#include "CalculatorSubSys_types.h"

/* Block signals for system '<Root>/AlgorthmicCalculator' */
typedef struct {
  uint16_T DotProduct;                 /* '<S1>/Dot Product' */
  uint16_T Product;                    /* '<S1>/Product' */
  uint8_T Add;                         /* '<S1>/Add' */
  uint8_T Divide;                      /* '<S1>/Divide' */
  uint8_T Subtract;                    /* '<S1>/Subtract' */
} B_AlgorthmicCalculator_Calcul_T;

extern void Calculator_AlgorthmicCalculator(uint8_T rtu_In1, uint8_T rtu_In2,
  B_AlgorthmicCalculator_Calcul_T *localB);

#endif                                 /* RTW_HEADER_AlgorthmicCalculator_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
