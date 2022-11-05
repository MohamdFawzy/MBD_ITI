/*
 * File: LedState.h
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

#ifndef RTW_HEADER_LedState_h_
#define RTW_HEADER_LedState_h_
#ifndef Led_Switch_COMMON_INCLUDES_
# define Led_Switch_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* Led_Switch_COMMON_INCLUDES_ */

#include "Led_Switch_types.h"

/* Block signals for system '<Root>/LedState' */
typedef struct {
  uint8_T ledstate;                    /* '<S1>/LEDChart' */
} B_LedState_Led_Switch_T;

/* Block states (auto storage) for system '<Root>/LedState' */
typedef struct {
  uint8_T is_active_c1_Led_Switch;     /* '<S1>/LEDChart' */
  uint8_T is_c1_Led_Switch;            /* '<S1>/LEDChart' */
  uint8_T is_Led_Normal;               /* '<S1>/LEDChart' */
} DW_LedState_Led_Switch_T;

extern void Led_Switch_LedState_Init(B_LedState_Led_Switch_T *localB,
  DW_LedState_Led_Switch_T *localDW);
extern void Led_Switch_LedState_Reset(B_LedState_Led_Switch_T *localB,
  DW_LedState_Led_Switch_T *localDW);
extern void Led_Switch_LedState(uint8_T rtu_In1, B_LedState_Led_Switch_T *localB,
  DW_LedState_Led_Switch_T *localDW);

#endif                                 /* RTW_HEADER_LedState_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
