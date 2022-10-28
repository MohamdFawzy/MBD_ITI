/*
 * File: Calculator_embeddedCoder.h
 *
 * Code generated for Simulink model 'Calculator_embeddedCoder'.
 *
 * Model version                  : 1.0
 * Simulink Coder version         : 8.10 (R2016a) 10-Feb-2016
 * C/C++ source code generated on : Sat Oct 29 00:24:02 2022
 *
 * Target selection: ert.tlc
 * Embedded hardware selection: Intel->x86-64 (Windows64)
 * Code generation objectives:
 *    1. Execution efficiency
 *    2. ROM efficiency
 *    3. MISRA C:2012 guidelines
 * Validation result: Not run
 */

#ifndef RTW_HEADER_Calculator_embeddedCoder_h_
#define RTW_HEADER_Calculator_embeddedCoder_h_
#include <string.h>
#ifndef Calculator_embeddedCoder_COMMON_INCLUDES_
# define Calculator_embeddedCoder_COMMON_INCLUDES_
#include "rtwtypes.h"
#endif                                 /* Calculator_embeddedCoder_COMMON_INCLUDES_ */

#include "Calculator_embeddedCoder_types.h"

/* Macros for accessing real-time model data structure */

/* External inputs (root inport signals with auto storage) */
typedef struct {
  uint8_T In1;                         /* '<Root>/In1' */
  uint8_T In2;                         /* '<Root>/In2' */
} ExtU_Calculator_embeddedCoder_T;

/* External outputs (root outports fed by signals with auto storage) */
typedef struct {
  uint8_T Out1;                        /* '<Root>/Out1' */
  uint8_T Out2;                        /* '<Root>/Out2' */
  uint16_T Out3;                       /* '<Root>/Out3' */
  uint16_T Out4;                       /* '<Root>/Out4' */
  uint8_T Out5;                        /* '<Root>/Out5' */
} ExtY_Calculator_embeddedCoder_T;

/* External inputs (root inport signals with auto storage) */
extern ExtU_Calculator_embeddedCoder_T Calculator_embeddedCoder_U;

/* External outputs (root outports fed by signals with auto storage) */
extern ExtY_Calculator_embeddedCoder_T Calculator_embeddedCoder_Y;

/* Model entry point functions */
extern void Calculator_embeddedCoder_initialize(void);
extern void Calculator_embeddedCoder_step(void);
extern void Calculator_embeddedCoder_terminate(void);

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
 * '<Root>' : 'Calculator_embeddedCoder'
 */
#endif                                 /* RTW_HEADER_Calculator_embeddedCoder_h_ */

/*
 * File trailer for generated code.
 *
 * [EOF]
 */
