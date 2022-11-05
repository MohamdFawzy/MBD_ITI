/*
 * File: Led_Switch.c
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

#include "Led_Switch.h"
#include "Led_Switch_private.h"

/* Block signals (auto storage) */
B_Led_Switch_T Led_Switch_B;

/* Block states (auto storage) */
DW_Led_Switch_T Led_Switch_DW;

/* External inputs (root inport signals with auto storage) */
ExtU_Led_Switch_T Led_Switch_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_Led_Switch_T Led_Switch_Y;

/* Model step function */
void Led_Switch_step(void)
{
  /* S-Function (fcncallgen): '<Root>/Function-Call Generator' incorporates:
   *  SubSystem: '<Root>/SwitchState'
   */
  /* Inport: '<Root>/In1' */
  Led_Switch_SwitchState(Led_Switch_U.In1, &Led_Switch_B.SwitchState,
    &Led_Switch_DW.SwitchState);

  /* S-Function (fcncallgen): '<Root>/Function-Call Generator' incorporates:
   *  SubSystem: '<Root>/LedState'
   */
  Led_Switch_LedState(Led_Switch_B.SwitchState.LEDaction, &Led_Switch_B.LedState,
                      &Led_Switch_DW.LedState);

  /* End of Outputs for S-Function (fcncallgen): '<Root>/Function-Call Generator' */

  /* Outport: '<Root>/Out1' */
  Led_Switch_Y.Out1 = Led_Switch_B.LedState.ledstate;
}

/* Model initialize function */
void Led_Switch_initialize(void)
{
  /* Registration code */

  /* block I/O */
  (void) memset(((void *) &Led_Switch_B), 0,
                sizeof(B_Led_Switch_T));

  /* states (dwork) */
  (void) memset((void *)&Led_Switch_DW, 0,
                sizeof(DW_Led_Switch_T));

  /* external inputs */
  Led_Switch_U.In1 = 0U;

  /* external outputs */
  Led_Switch_Y.Out1 = 0U;

  /* SystemInitialize for S-Function (fcncallgen): '<Root>/Function-Call Generator' incorporates:
   *  SystemInitialize for SubSystem: '<Root>/SwitchState'
   */
  Led_Switch_SwitchState_Init(&Led_Switch_DW.SwitchState);

  /* SystemInitialize for S-Function (fcncallgen): '<Root>/Function-Call Generator' incorporates:
   *  SystemInitialize for SubSystem: '<Root>/LedState'
   */
  Led_Switch_LedState_Init(&Led_Switch_B.LedState, &Led_Switch_DW.LedState);

  /* End of SystemInitialize for S-Function (fcncallgen): '<Root>/Function-Call Generator' */

  /* SystemReset for S-Function (fcncallgen): '<Root>/Function-Call Generator' incorporates:
   *  SystemReset for SubSystem: '<Root>/SwitchState'
   */

  /* Enable for S-Function (fcncallgen): '<Root>/Function-Call Generator' */
  Led_Switch_SwitchState_Reset(&Led_Switch_DW.SwitchState);

  /* SystemReset for S-Function (fcncallgen): '<Root>/Function-Call Generator' incorporates:
   *  SystemReset for SubSystem: '<Root>/LedState'
   */
  Led_Switch_LedState_Reset(&Led_Switch_B.LedState, &Led_Switch_DW.LedState);

  /* End of SystemReset for S-Function (fcncallgen): '<Root>/Function-Call Generator' */

  /* End of Enable for S-Function (fcncallgen): '<Root>/Function-Call Generator' */
}

/* Model terminate function */
void Led_Switch_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
