import { startMCQ } from "../../../engine/mcq_engine.js";

import { piagetMcq } from "../../../data/piaget_mcq_question.js";



startMCQ({

  data: piagetMcq,

  subjectKey: "piaget_subject",

  limitKey: "piaget_limit",

  indexKey: "piaget_q_index",

  orderKey: "piaget_q_order",

  attemptKey: "piaget_attempt_map",
  resultKey: "piaget_test_result"

});