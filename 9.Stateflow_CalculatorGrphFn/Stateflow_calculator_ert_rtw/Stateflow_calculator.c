/*
 * File: Stateflow_calculator.c
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

#include "Stateflow_calculator.h"
#include "Stateflow_calculator_private.h"

/* Block states (auto storage) */
DW_Stateflow_calculator_T Stateflow_calculator_DW;

/* External inputs (root inport signals with auto storage) */
ExtU_Stateflow_calculator_T Stateflow_calculator_U;

/* External outputs (root outports fed by signals with auto storage) */
ExtY_Stateflow_calculator_T Stateflow_calculator_Y;

/* Forward declaration for local functions */
static void Stateflow_calculator_add(uint8_T x, uint8_T y);
static void Stateflow_calculator_sub(uint8_T x, uint8_T y);
static void Stateflow_calculator_product(uint8_T x, uint8_T y);
static void Stateflow_calculator_divide(uint8_T x, uint8_T y);
int32_T div_su32(uint32_T numerator, uint32_T denominator)
{
  int32_T quotient;
  if (denominator == 0U) {
    quotient = MAX_int32_T;

    /* Divide by zero handler */
  } else {
    quotient = (int32_T)(numerator / denominator);
  }

  return quotient;
}

/* Function for Chart: '<Root>/Chart' */
static void Stateflow_calculator_add(uint8_T x, uint8_T y)
{
  int32_T tmp;

  /* Graphical Function 'add': '<S1>:4' */
  /* Transition: '<S1>:6' */
  tmp = x + y;
  if (tmp > 255) {
    tmp = 255;
  }

  Stateflow_calculator_Y.Out1 = (uint8_T)tmp;
}

/* Function for Chart: '<Root>/Chart' */
static void Stateflow_calculator_sub(uint8_T x, uint8_T y)
{
  int32_T tmp;

  /* Graphical Function 'sub': '<S1>:7' */
  /* Transition: '<S1>:9' */
  tmp = x - y;
  if (tmp < 0) {
    tmp = 0;
  }

  Stateflow_calculator_Y.Out2 = (uint8_T)tmp;
}

/* Function for Chart: '<Root>/Chart' */
static void Stateflow_calculator_product(uint8_T x, uint8_T y)
{
  /* Graphical Function 'product': '<S1>:10' */
  /* Transition: '<S1>:12' */
  Stateflow_calculator_Y.Out3 = (uint16_T)(x * y);
}

/* Function for Chart: '<Root>/Chart' */
static void Stateflow_calculator_divide(uint8_T x, uint8_T y)
{
  /* Graphical Function 'divide': '<S1>:13' */
  /* Transition: '<S1>:23' */
  /*  zerocheck  */
  if (y == 0) {
    /* Transition: '<S1>:24' */
    /* Transition: '<S1>:26' */
    Stateflow_calculator_Y.Out4 = 0U;

    /* Transition: '<S1>:27' */
  } else {
    /* Transition: '<S1>:25' */
    Stateflow_calculator_Y.Out4 = (uint16_T)div_su32(x, y);
  }

  /* Transition: '<S1>:28' */
}

/* Model step function */
void Stateflow_calculator_step(void)
{
  /* Chart: '<Root>/Chart' incorporates:
   *  Inport: '<Root>/In1'
   *  Inport: '<Root>/In2'
   */
  /* Gateway: Chart */
  /* During: Chart */
  if (Stateflow_calculator_DW.is_active_c3_Stateflow_calculat == 0U) {
    /* Entry: Chart */
    Stateflow_calculator_DW.is_active_c3_Stateflow_calculat = 1U;

    /* Entry Internal: Chart */
    /* Transition: '<S1>:37' */
    /* Entry 'State': '<S1>:36' */
    Stateflow_calculator_add(Stateflow_calculator_U.In1,
      Stateflow_calculator_U.In2);
    Stateflow_calculator_sub(Stateflow_calculator_U.In1,
      Stateflow_calculator_U.In2);
    Stateflow_calculator_product(Stateflow_calculator_U.In1,
      Stateflow_calculator_U.In2);
    Stateflow_calculator_divide(Stateflow_calculator_U.In1,
      Stateflow_calculator_U.In2);
  } else {
    /* During 'State': '<S1>:36' */
  }

  /* End of Chart: '<Root>/Chart' */
}

/* Model initialize function */
void Stateflow_calculator_initialize(void)
{
  /* Registration code */

  /* states (dwork) */
  (void) memset((void *)&Stateflow_calculator_DW, 0,
                sizeof(DW_Stateflow_calculator_T));

  /* external inputs */
  (void) memset((void *)&Stateflow_calculator_U, 0,
                sizeof(ExtU_Stateflow_calculator_T));

  /* external outputs */
  (void) memset((void *)&Stateflow_calculator_Y, 0,
                sizeof(ExtY_Stateflow_calculator_T));

  /* SystemInitialize for Chart: '<Root>/Chart' */
  Stateflow_calculator_DW.is_active_c3_Stateflow_calculat = 0U;

  /* SystemInitialize for Outport: '<Root>/Out1' incorporates:
   *  SystemInitialize for Chart: '<Root>/Chart'
   */
  Stateflow_calculator_Y.Out1 = 0U;

  /* SystemInitialize for Outport: '<Root>/Out2' incorporates:
   *  SystemInitialize for Chart: '<Root>/Chart'
   */
  Stateflow_calculator_Y.Out2 = 0U;

  /* SystemInitialize for Outport: '<Root>/Out3' incorporates:
   *  SystemInitialize for Chart: '<Root>/Chart'
   */
  Stateflow_calculator_Y.Out3 = 0U;

  /* SystemInitialize for Outport: '<Root>/Out4' incorporates:
   *  SystemInitialize for Chart: '<Root>/Chart'
   */
  Stateflow_calculator_Y.Out4 = 0U;
}

/* Model terminate function */
void Stateflow_calculator_terminate(void)
{
  /* (no terminate code required) */
}

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
