import { startMCQ } from "../../../engine/mcq_engine.js";

import { kohlbargMcq } from "../../../data/kohlbarg-mcq.js";
import { piagetMcq } from "../../../data/piaget_mcq_question.js";

startMCQ({

  data: kohlbargMcq,

  subjectKey: "kohlbarg_subject",

  limitKey: "kohlbarg_limit",

  indexKey: "kohlbarg_q_index",

  orderKey: "kohlbarg_q_order",

  attemptKey: "kohlbarg_attempt_map",
  resultKey: "kohlbarg_test_result"

});