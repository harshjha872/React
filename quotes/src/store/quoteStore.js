import { configureStore, createSlice } from "@reduxjs/toolkit";

const quote = createSlice({
  name: "quote",
  initialState: {
    allquotes: [
      {
        Author: "Harsh Jha",
        quote: "This is the quote 1",
        comments: ["very nice", "excellent"],
        id: "q1",
      },
      {
        Author: "Harsh Jha",
        quote: "this is the second quote",
        comments: ["very good", "Noice"],
        id: "q2",
      },
    ],
  },
  reducers: {
    addQuote(state, action) {
      state.allquotes.push(action.payload);
    },
    addComment(state, action) {
      const quoteSelect = state.allquotes.find(
        (ele) => ele.id === action.payload.id
      );
      quoteSelect.comments.push(action.payload.comment);
    },
  },
});

const QuoteStore = configureStore({
  reducer: quote.reducer,
});

export const QuoteActions = quote.actions;

export default QuoteStore;
