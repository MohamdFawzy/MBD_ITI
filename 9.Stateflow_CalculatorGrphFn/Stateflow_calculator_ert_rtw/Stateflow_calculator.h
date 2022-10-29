/*
 * File: Stateflow_calculator.h
 *
 * Code generated for Simulink model 'Stateflow_calculator'.
 *
 * Model version                  : 1.5
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Sun Oct 30 00:30:26 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. ROM efficiency
 *    3. MISRA C:2012 guidelines
 * Validation result: Not run
 */

#ifndef RTW_HEADER_Stateflow_calculator_h_
#define RTW_HEADER_Stateflow_calculator_h_
#include <string.h>
#ifndef Stateflow_calculator_COMMON_INCLUDES_
# define Stateflow_calculator_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* Stateflow_calculator_COMMON_INCLUDES_ */

#include "Stateflow_calculator_types.h"

/* Macros for accessing real-time model data structure */

/* Block states (auto storage) for system '<Root>' */
typedef struct {
  uint8_T is_active_c3_Stateflow_calculat;/* '<Root>/Chart' */
} DW_Stateflow_calculator_T;

/* External inputs (root inport signals with auto storage) */
typedef struct {
  uint8_T In1;                         /* '<Root>/In1' */
  uint8_T In2;                         /* '<Root>/In2' */
} ExtU_Stateflow_calculator_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  uint8_T Out1;                        /* '<Root>/Out1' */
  uint8_T Out2;                        /* '<Root>/Out2' */
  uint16_T Out3;                       /* '<Root>/Out3' */
  uint16_T Out4;                       /* '<Root>/Out4' */
} ExtY_Stateflow_calculator_T;

/* Block states (auto storage) */
extern DW_Stateflow_calculator_T Stateflow_calculator_DW;

/* External inputs (root inport signals with auto storage) */
extern ExtU_Stateflow_calculator_T Stateflow_calculator_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_Stateflow_calculator_T Stateflow_calculator_Y;

/* Model entry point functions */
extern void Stateflow_calculator_initialize(void);
extern void Stateflow_calculator_step(void);
extern void Stateflow_calculator_terminate(void);

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
 * '<Root>' : 'Stateflow_calculator'
 * '<S1>'   : 'Stateflow_calculator/Chart'
 */
#endif                                 /* RTW_HEADER_Stateflow_calculator_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
