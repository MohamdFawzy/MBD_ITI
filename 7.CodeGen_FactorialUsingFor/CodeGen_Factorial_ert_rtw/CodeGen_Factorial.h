/*
 * File: CodeGen_Factorial.h
 *
 * Code generated for Simulink model 'CodeGen_Factorial'.
 *
 * Model version                  : 1.1
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Sat Oct 29 23:21:54 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. ROM efficiency
 *    3. MISRA C:2012 guidelines
 * Validation result: Not run
 */

#ifndef RTW_HEADER_CodeGen_Factorial_h_
#define RTW_HEADER_CodeGen_Factorial_h_
#ifndef CodeGen_Factorial_COMMON_INCLUDES_
# define CodeGen_Factorial_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* CodeGen_Factorial_COMMON_INCLUDES_ */

#include "CodeGen_Factorial_types.h"

/* Macros for accessing real-time model data structure */

/* External inputs (root inport signals with auto storage) */
typedef struct {
  int8_T In1;                          /* '<Root>/In1' */
} ExtU_CodeGen_Factorial_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  uint16_T Out1;                       /* '<Root>/Out1' */
} ExtY_CodeGen_Factorial_T;

/* External inputs (root inport signals with auto storage) */
extern ExtU_CodeGen_Factorial_T CodeGen_Factorial_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_CodeGen_Factorial_T CodeGen_Factorial_Y;

/* Model entry point functions */
extern void CodeGen_Factorial_initialize(void);
extern void CodeGen_Factorial_step(void);
extern void CodeGen_Factorial_terminate(void);

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
 * '<Root>' : 'CodeGen_Factorial'
 * '<S1>'   : 'CodeGen_Factorial/For Iterator Subsystem'
 */
#endif                                 /* RTW_HEADER_CodeGen_Factorial_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
