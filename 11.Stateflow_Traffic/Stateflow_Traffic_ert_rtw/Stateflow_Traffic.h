/*
 * File: Stateflow_Traffic.h
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

#ifndef RTW_HEADER_Stateflow_Traffic_h_
#define RTW_HEADER_Stateflow_Traffic_h_
#include <string.h>
#ifndef Stateflow_Traffic_COMMON_INCLUDES_
# define Stateflow_Traffic_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* Stateflow_Traffic_COMMON_INCLUDES_ */

#include "Stateflow_Traffic_types.h"

/* Macros for accessing real-time model data structure */

/* Block signals (auto storage) */
typedef struct {
  boolean_T red;                       /* '<Root>/Chart' */
  boolean_T yellow;                    /* '<Root>/Chart' */
  boolean_T green;                     /* '<Root>/Chart' */
} B_Stateflow_Traffic_T;

/* Block states (auto storage) for system '<Root>' */
typedef struct {
  struct {
    void *AQHandles;
  } HiddenToAsyncQueue_InsertedFor_;   /* synthesized block */

  struct {
    void *AQHandles;
  } HiddenToAsyncQueue_InsertedFo_d;   /* synthesized block */

  struct {
    void *AQHandles;
  } HiddenToAsyncQueue_InsertedFo_l;   /* synthesized block */

  uint8_T Output_DSTATE;               /* '<S2>/Output' */
  uint8_T is_active_c3_Stateflow_Traffic;/* '<Root>/Chart' */
  uint8_T is_counter;                  /* '<Root>/Chart' */
} DW_Stateflow_Traffic_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  boolean_T red;                       /* '<Root>/red' */
  boolean_T yellow;                    /* '<Root>/yellow ' */
  boolean_T greem;                     /* '<Root>/greem ' */
} ExtY_Stateflow_Traffic_T;

/* Block signals (auto storage) */
extern B_Stateflow_Traffic_T Stateflow_Traffic_B;

/* Block states (auto storage) */
extern DW_Stateflow_Traffic_T Stateflow_Traffic_DW;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_Stateflow_Traffic_T Stateflow_Traffic_Y;

/* Model entry point functions */
extern void Stateflow_Traffic_initialize(void);
extern void Stateflow_Traffic_step(void);
extern void Stateflow_Traffic_terminate(void);

/*-
 * These blocks were eliminated from the model due to optimizations:
 *
 * Block '<S2>/Data Type Propagation' : Unused code path elimination
 * Block '<S3>/FixPt Data Type Duplicate' : Unused code path elimination
 * Block '<S4>/FixPt Data Type Duplicate1' : Unused code path elimination
 * Block '<Root>/Scope' : Unused code path elimination
 */

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
 * '<Root>' : 'Stateflow_Traffic'
 * '<S1>'   : 'Stateflow_Traffic/Chart'
 * '<S2>'   : 'Stateflow_Traffic/Counter Limited'
 * '<S3>'   : 'Stateflow_Traffic/Counter Limited/Increment Real World'
 * '<S4>'   : 'Stateflow_Traffic/Counter Limited/Wrap To Zero'
 */
#endif                                 /* RTW_HEADER_Stateflow_Traffic_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
