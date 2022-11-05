/*
 * File: Led_Switch.h
 *
 * Code generated for Simulink model 'Led_Switch'.
 *
 * Model version                  : 1.10
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Sat Nov 05 19:00:19 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. ROM efficiency
 *    3. MISRA C:2012 guidelines
 * Validation result: Not run
 */

#ifndef RTW_HEADER_Led_Switch_h_
#define RTW_HEADER_Led_Switch_h_
#include <string.h>
#ifndef Led_Switch_COMMON_INCLUDES_
# define Led_Switch_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* Led_Switch_COMMON_INCLUDES_ */

#include "Led_Switch_types.h"

/* Child system includes */
#include "LedState.h"
#include "SwitchState.h"

/* Macros for accessing real-time model data structure */

/* Block signals (auto storage) */
typedef struct {
  B_LedState_Led_Switch_T LedState;    /* '<Root>/LedState' */
  B_SwitchState_Led_Switch_T SwitchState;/* '<Root>/SwitchState' */
} B_Led_Switch_T;

/* Block states (auto storage) for system '<Root>' */
typedef struct {
  DW_LedState_Led_Switch_T LedState;   /* '<Root>/LedState' */
  DW_SwitchState_Led_Switch_T SwitchState;/* '<Root>/SwitchState' */
} DW_Led_Switch_T;

/* External inputs (root inport signals with auto storage) */
typedef struct {
  uint8_T In1;                         /* '<Root>/In1' */
} ExtU_Led_Switch_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  uint8_T Out1;                        /* '<Root>/Out1' */
} ExtY_Led_Switch_T;

/* Block signals (auto storage) */
extern B_Led_Switch_T Led_Switch_B;

/* Block states (auto storage) */
extern DW_Led_Switch_T Led_Switch_DW;

/* External inputs (root inport signals with auto storage) */
extern ExtU_Led_Switch_T Led_Switch_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_Led_Switch_T Led_Switch_Y;

/* Model entry point functions */
extern void Led_Switch_initialize(void);
extern void Led_Switch_step(void);
extern void Led_Switch_terminate(void);

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
 * '<Root>' : 'Led_Switch'
 * '<S1>'   : 'Led_Switch/LedState'
 * '<S2>'   : 'Led_Switch/SwitchState'
 * '<S3>'   : 'Led_Switch/LedState/LEDChart'
 * '<S4>'   : 'Led_Switch/SwitchState/SwitchChart'
 */
#endif                                 /* RTW_HEADER_Led_Switch_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
