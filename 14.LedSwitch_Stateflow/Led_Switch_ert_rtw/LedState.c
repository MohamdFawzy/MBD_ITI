/*
 * File: LedState.c
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

#include "LedState.h"

/* Include model header file for global data */
#include "Led_Switch.h"
#include "Led_Switch_private.h"

/* Named constants for Chart: '<S1>/LEDChart' */
#define Led_Switch_IN_LedOff           ((uint8_T)1U)
#define Led_Switch_IN_LedOn            ((uint8_T)2U)
#define Led_Switch_IN_Led_Fault        ((uint8_T)1U)
#define Led_Switch_IN_Led_Normal       ((uint8_T)2U)
#define Led_Switch_IN_NO_ACTIVE_CHILD_h ((uint8_T)0U)

/* System initialize for function-call system: '<Root>/LedState' */
void Led_Switch_LedState_Init(B_LedState_Led_Switch_T *localB,
  DW_LedState_Led_Switch_T *localDW)
{
  /* SystemInitialize for Chart: '<S1>/LEDChart' */
  localDW->is_Led_Normal = Led_Switch_IN_NO_ACTIVE_CHILD_h;
  localDW->is_active_c1_Led_Switch = 0U;
  localDW->is_c1_Led_Switch = Led_Switch_IN_NO_ACTIVE_CHILD_h;
  localB->ledstate = 0U;
}

/* System reset for function-call system: '<Root>/LedState' */
void Led_Switch_LedState_Reset(B_LedState_Led_Switch_T *localB,
  DW_LedState_Led_Switch_T *localDW)
{
  /* SystemReset for Chart: '<S1>/LEDChart' */
  localDW->is_Led_Normal = Led_Switch_IN_NO_ACTIVE_CHILD_h;
  localDW->is_active_c1_Led_Switch = 0U;
  localDW->is_c1_Led_Switch = Led_Switch_IN_NO_ACTIVE_CHILD_h;
  localB->ledstate = 0U;
}

/* Output and update for function-call system: '<Root>/LedState' */
void Led_Switch_LedState(uint8_T rtu_In1, B_LedState_Led_Switch_T *localB,
  DW_LedState_Led_Switch_T *localDW)
{
  /* Chart: '<S1>/LEDChart' */
  /* Gateway: LedState/LEDChart */
  /* During: LedState/LEDChart */
  if (localDW->is_active_c1_Led_Switch == 0U) {
    /* Entry: LedState/LEDChart */
    localDW->is_active_c1_Led_Switch = 1U;

    /* Entry Internal: LedState/LEDChart */
    /* Transition: '<S3>:2' */
    localDW->is_c1_Led_Switch = Led_Switch_IN_Led_Normal;

    /* Entry Internal 'Led_Normal': '<S3>:1' */
    /* Transition: '<S3>:5' */
    localDW->is_Led_Normal = Led_Switch_IN_LedOff;

    /* Entry 'LedOff': '<S3>:4' */
    localB->ledstate = 0U;
  } else if (localDW->is_c1_Led_Switch != Led_Switch_IN_Led_Fault) {
    /* During 'Led_Normal': '<S3>:1' */
    if (localDW->is_Led_Normal == Led_Switch_IN_LedOff) {
      /* During 'LedOff': '<S3>:4' */
      if (rtu_In1 == 1) {
        /* Transition: '<S3>:7' */
        localDW->is_Led_Normal = Led_Switch_IN_LedOn;

        /* Entry 'LedOn': '<S3>:6' */
        localB->ledstate = 1U;
      }
    } else {
      /* During 'LedOn': '<S3>:6' */
      if (rtu_In1 == 0) {
        /* Transition: '<S3>:8' */
        localDW->is_Led_Normal = Led_Switch_IN_LedOff;

        /* Entry 'LedOff': '<S3>:4' */
        localB->ledstate = 0U;
      }
    }
  } else {
    /* During 'Led_Fault': '<S3>:3' */
  }

  /* End of Chart: '<S1>/LEDChart' */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
