import { startMCQ } from "../../../engine/mcq_engine.js";
import { mockQuestion } from "../../../data/mock_question.js";


startMCQ({

  data: mockQuestion,

  subjectKey: "mock_subject",

  limitKey: "mock_limit",

  indexKey: "mock_q_index",

  orderKey: "mock_q_order",

  attemptKey: "mock_attempt_map"

});