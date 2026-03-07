import { startMCQ } from "../../../engine/mcq_engine.js";
import { eriksonMcq } from "../../../data/eriksonDataMcq.js";


startMCQ({

  data: eriksonMcq,

  subjectKey: "erikson_subject",

  limitKey: "erikson_limit",

  indexKey: "erikson_q_index",

  orderKey: "erikson_q_order",

  attemptKey: "erikson_attempt_map",
  resultKey: "erikson_test_result"

});