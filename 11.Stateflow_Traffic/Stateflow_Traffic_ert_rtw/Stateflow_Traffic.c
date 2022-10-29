/*
 * File: Stateflow_Traffic.c
 *
 * Code generated for Simulink model 'Stateflow_Traffic'.
 *
 * Model version                  : 1.7
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Sun Oct 30 01:47:03 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. ROM efficiency
 *    3. MISRA C:2012 guidelines
 * Validation result: Not run
 */

#include "Stateflow_Traffic.h"
#include "Stateflow_Traffic_private.h"

/* Named constants for Chart: '<Root>/Chart' */
#define Stateflow_Tr_IN_NO_ACTIVE_CHILD ((uint8_T)0U)
#define Stateflow_Traffic_IN_GO        ((uint8_T)1U)
#define Stateflow_Traffic_IN_Hold      ((uint8_T)2U)
#define Stateflow_Traffic_IN_Stop      ((uint8_T)3U)

/* Block signals (auto storage) */
B_Stateflow_Traffic_T Stateflow_Traffic_B;

/* Block states (auto storage) */
DW_Stateflow_Traffic_T Stateflow_Traffic_DW;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_Stateflow_Traffic_T Stateflow_Traffic_Y;

/* Model step function */
void Stateflow_Traffic_step(void)
{
  uint8_T rtb_FixPtSum1;

  /* Chart: '<Root>/Chart' incorporates:
   *  UnitDelay: '<S2>/Output'
   */
  /* Gateway: Chart */
  /* During: Chart */
  if (Stateflow_Traffic_DW.is_active_c3_Stateflow_Traffic == 0U) {
    /* Entry: Chart */
    Stateflow_Traffic_DW.is_active_c3_Stateflow_Traffic = 1U;

    /* Entry Internal: Chart */
    /* Transition: '<S1>:31' */
    /* Entry Internal 'counter': '<S1>:30' */
    /* Transition: '<S1>:5' */
    Stateflow_Traffic_DW.is_counter = Stateflow_Traffic_IN_Stop;

    /* Entry 'Stop': '<S1>:4' */
    Stateflow_Traffic_B.red = true;
  } else {
    /* During 'counter': '<S1>:30' */
    switch (Stateflow_Traffic_DW.is_counter) {
     case Stateflow_Traffic_IN_GO:
      /* During 'GO': '<S1>:7' */
      if (Stateflow_Traffic_DW.Output_DSTATE == 9) {
        /* Transition: '<S1>:13' */
        /* Exit 'GO': '<S1>:7' */
        Stateflow_Traffic_B.green = false;
        Stateflow_Traffic_DW.is_counter = Stateflow_Traffic_IN_Hold;

        /* Entry 'Hold': '<S1>:6' */
        Stateflow_Traffic_B.yellow = true;
      } else {
        Stateflow_Traffic_B.green = true;
      }
      break;

     case Stateflow_Traffic_IN_Hold:
      /* During 'Hold': '<S1>:6' */
      switch (Stateflow_Traffic_DW.Output_DSTATE) {
       case 6:
        /* Transition: '<S1>:12' */
        /* Exit 'Hold': '<S1>:6' */
        Stateflow_Traffic_B.yellow = false;
        Stateflow_Traffic_DW.is_counter = Stateflow_Traffic_IN_GO;

        /* Entry 'GO': '<S1>:7' */
        Stateflow_Traffic_B.green = true;
        break;

       case 12:
        /* Transition: '<S1>:14' */
        /* Exit 'Hold': '<S1>:6' */
        Stateflow_Traffic_B.yellow = false;
        Stateflow_Traffic_DW.is_counter = Stateflow_Traffic_IN_Stop;

        /* Entry 'Stop': '<S1>:4' */
        Stateflow_Traffic_B.red = true;
        break;

       default:
        Stateflow_Traffic_B.yellow = true;
        break;
      }
      break;

     default:
      /* During 'Stop': '<S1>:4' */
      if (Stateflow_Traffic_DW.Output_DSTATE == 3) {
        /* Transition: '<S1>:11' */
        /* Exit 'Stop': '<S1>:4' */
        Stateflow_Traffic_B.red = false;
        Stateflow_Traffic_DW.is_counter = Stateflow_Traffic_IN_Hold;

        /* Entry 'Hold': '<S1>:6' */
        Stateflow_Traffic_B.yellow = true;
      } else {
        Stateflow_Traffic_B.red = true;
      }
      break;
    }
  }

  /* End of Chart: '<Root>/Chart' */

  /* Outport: '<Root>/red' */
  Stateflow_Traffic_Y.red = Stateflow_Traffic_B.red;

  /* Outport: '<Root>/yellow ' */
  Stateflow_Traffic_Y.yellow = Stateflow_Traffic_B.yellow;

  /* Outport: '<Root>/greem ' */
  Stateflow_Traffic_Y.greem = Stateflow_Traffic_B.green;

  /* Sum: '<S3>/FixPt Sum1' incorporates:
   *  Constant: '<S3>/FixPt Constant'
   *  UnitDelay: '<S2>/Output'
   */
  rtb_FixPtSum1 = (uint8_T)(Stateflow_Traffic_DW.Output_DSTATE + 1U);

  /* Switch: '<S4>/FixPt Switch' */
  if (rtb_FixPtSum1 > 15) {
    /* Update for UnitDelay: '<S2>/Output' incorporates:
     *  Constant: '<S4>/Constant'
     */
    Stateflow_Traffic_DW.Output_DSTATE = 0U;
  } else {
    /* Update for UnitDelay: '<S2>/Output' */
    Stateflow_Traffic_DW.Output_DSTATE = rtb_FixPtSum1;
  }

  /* End of Switch: '<S4>/FixPt Switch' */
}

/* Model initialize function */
void Stateflow_Traffic_initialize(void)
{
  /* Registration code */

  /* block I/O */
  (void) memset(((void *) &Stateflow_Traffic_B), 0,
                sizeof(B_Stateflow_Traffic_T));

  /* states (dwork) */
  (void) memset((void *)&Stateflow_Traffic_DW, 0,
                sizeof(DW_Stateflow_Traffic_T));

  /* external outputs */
  (void) memset((void *)&Stateflow_Traffic_Y, 0,
                sizeof(ExtY_Stateflow_Traffic_T));

  /* SystemInitialize for Chart: '<Root>/Chart' */
  Stateflow_Traffic_DW.is_counter = Stateflow_Tr_IN_NO_ACTIVE_CHILD;
  Stateflow_Traffic_DW.is_active_c3_Stateflow_Traffic = 0U;
  Stateflow_Traffic_B.red = false;
  Stateflow_Traffic_B.yellow = false;
  Stateflow_Traffic_B.green = false;
}

/* Model terminate function */
void Stateflow_Traffic_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
