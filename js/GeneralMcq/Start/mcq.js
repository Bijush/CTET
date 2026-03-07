import { startMCQ } from "../../../engine/mcq_engine.js";
import { mcqQuestion } from "../../../data/mcq_question.js";


startMCQ({

  data: mcqQuestion,

  subjectKey: "mcq_subject",

  limitKey: "mcq_limit",

  indexKey: "mcq_q_index",

  orderKey: "mcq_q_order",

  attemptKey: "mcq_attempt_map"

});