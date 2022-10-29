/*
 * File: CalculatorSubSys.h
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

#ifndef RTW_HEADER_CalculatorSubSys_h_
#define RTW_HEADER_CalculatorSubSys_h_
#include <string.h>
#ifndef CalculatorSubSys_COMMON_INCLUDES_
# define CalculatorSubSys_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* CalculatorSubSys_COMMON_INCLUDES_ */

#include "CalculatorSubSys_types.h"

/* Child system includes */
#include "AlgorthmicCalculator.h"
#include "BitwiseCalculator.h"

/* Macros for accessing real-time model data structure */

/* Block signals (auto storage) */
typedef struct {
  B_BitwiseCalculator_Calculato_T BitwiseCalculator;/* '<Root>/BitwiseCalculator' */
  B_AlgorthmicCalculator_Calcul_T AlgorthmicCalculator;/* '<Root>/AlgorthmicCalculator' */
} B_CalculatorSubSys_T;

/* External inputs (root inport signals with auto storage) */
typedef struct {
  uint8_T In1;                         /* '<Root>/In1' */
  uint8_T In2;                         /* '<Root>/In2' */
} ExtU_CalculatorSubSys_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  uint8_T Out1;                        /* '<Root>/Out1' */
  uint8_T Out2;                        /* '<Root>/Out2' */
  uint16_T Out3;                       /* '<Root>/Out3' */
  uint16_T Out4;                       /* '<Root>/Out4' */
  uint8_T Out5;                        /* '<Root>/Out5' */
  uint8_T Out6;                        /* '<Root>/Out6' */
  uint8_T Out7;                        /* '<Root>/Out7' */
  uint8_T Out8;                        /* '<Root>/Out8' */
  uint8_T Out9;                        /* '<Root>/Out9' */
  uint8_T Out10;                       /* '<Root>/Out10' */
} ExtY_CalculatorSubSys_T;

/* Block signals (auto storage) */
extern B_CalculatorSubSys_T CalculatorSubSys_B;

/* External inputs (root inport signals with auto storage) */
extern ExtU_CalculatorSubSys_T CalculatorSubSys_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_CalculatorSubSys_T CalculatorSubSys_Y;

/* Model entry point functions */
extern void CalculatorSubSys_initialize(void);
extern void CalculatorSubSys_step(void);
extern void CalculatorSubSys_terminate(void);

/*-
 * The generated code includes comments that allow you to trace directly
 * back to the appropriate location in the model.  The basic format
 * is <system>/block_name, where system is the system number (uniquely
 * assigned by Simulink) and block_name is the name of the block.
 *
 * Use the MATLAB hilite_system command to trace the generated code back
 * to the model.  For example,
 *
 * hilite_system('<S3>')    - opens system 3
 * hilite_system('<S3>/Kp') - opens and selects block Kp which resides in S3
 *
 * Here is the system hierarchy for this model
 *
 * '<Root>' : 'CalculatorSubSys'
 * '<S1>'   : 'CalculatorSubSys/AlgorthmicCalculator'
 * '<S2>'   : 'CalculatorSubSys/BitwiseCalculator'
 */
#endif                                 /* RTW_HEADER_CalculatorSubSys_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
