import { startMCQ } from "../../../engine/mcq_engine.js";
import { VygotskyMcq } from "../../../data/vygotskyMcq.js";

startMCQ({

  data: VygotskyMcq,

  subjectKey: "vygotsky_subject",

  limitKey: "vygotsky_limit",

  indexKey: "vygotsky_q_index",

  orderKey: "vygotsky_q_order",

  attemptKey: "vygotsky_attempt_map",
  resultKey: "vygotsky_test_result"

});