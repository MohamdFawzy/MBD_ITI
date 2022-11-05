/*
 * File: SwitchState.c
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

#include "SwitchState.h"

/* Include model header file for global data */
#include "Led_Switch.h"
#include "Led_Switch_private.h"

/* Named constants for Chart: '<S2>/SwitchChart' */
#define Led_Switch_IN_NO_ACTIVE_CHILD  ((uint8_T)0U)
#define Led_Switch_IN_NotPressed       ((uint8_T)1U)
#define Led_Switch_IN_Pressed          ((uint8_T)2U)

/* System initialize for function-call system: '<Root>/SwitchState' */
void Led_Switch_SwitchState_Init(DW_SwitchState_Led_Switch_T *localDW)
{
  /* SystemInitialize for Chart: '<S2>/SwitchChart' */
  localDW->is_Sw_Normal = Led_Switch_IN_NO_ACTIVE_CHILD;
  localDW->is_active_c3_Led_Switch = 0U;
}

/* System reset for function-call system: '<Root>/SwitchState' */
void Led_Switch_SwitchState_Reset(DW_SwitchState_Led_Switch_T *localDW)
{
  /* SystemReset for Chart: '<S2>/SwitchChart' */
  localDW->is_Sw_Normal = Led_Switch_IN_NO_ACTIVE_CHILD;
  localDW->is_active_c3_Led_Switch = 0U;
}

/* Output and update for function-call system: '<Root>/SwitchState' */
void Led_Switch_SwitchState(uint8_T rtu_In1, B_SwitchState_Led_Switch_T *localB,
  DW_SwitchState_Led_Switch_T *localDW)
{
  /* Chart: '<S2>/SwitchChart' */
  /* Gateway: SwitchState/SwitchChart */
  /* During: SwitchState/SwitchChart */
  if (localDW->is_active_c3_Led_Switch == 0U) {
    /* Entry: SwitchState/SwitchChart */
    localDW->is_active_c3_Led_Switch = 1U;

    /* Entry Internal: SwitchState/SwitchChart */
    /* Transition: '<S4>:2' */
    /* Entry Internal 'Sw_Normal': '<S4>:1' */
    /* Transition: '<S4>:4' */
    localDW->is_Sw_Normal = Led_Switch_IN_NotPressed;

    /* Entry 'NotPressed': '<S4>:3' */
    /* '<S4>:3:1' LEDaction= uint8(0); */
    localB->LEDaction = 0U;
  } else {
    /* During 'Sw_Normal': '<S4>:1' */
    if (localDW->is_Sw_Normal == Led_Switch_IN_NotPressed) {
      /* During 'NotPressed': '<S4>:3' */
      /* '<S4>:11:1' sf_internal_predicateOutput = ... */
      /* '<S4>:11:1' SwitchState==1; */
      if (rtu_In1 == 1) {
        /* Transition: '<S4>:11' */
        localDW->is_Sw_Normal = Led_Switch_IN_Pressed;

        /* Entry 'Pressed': '<S4>:5' */
        /* '<S4>:5:1' LEDaction=uint8(1); */
        localB->LEDaction = 1U;
      }
    } else {
      /* During 'Pressed': '<S4>:5' */
      /* '<S4>:10:1' sf_internal_predicateOutput = ... */
      /* '<S4>:10:1' SwitchState==0; */
      if (rtu_In1 == 0) {
        /* Transition: '<S4>:10' */
        localDW->is_Sw_Normal = Led_Switch_IN_NotPressed;

        /* Entry 'NotPressed': '<S4>:3' */
        /* '<S4>:3:1' LEDaction= uint8(0); */
        localB->LEDaction = 0U;
      }
    }
  }

  /* End of Chart: '<S2>/SwitchChart' */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
