/* eslint-disable */
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Board, { BoardDetail, BoardRetouch, CreateBoard } from "./component/Board";
import Join from "./component/Join";
import Topmenu, { HomeContent } from "./component/Home";
import Login, { LoginBar } from "./component/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={
              <>
                <Topmenu />
                <HomeContent />
              </>
            }
          ></Route>
          <Route
            path={"/board"}
            element={
              <>
                <Topmenu />
                <Board />
              </>
            }
          ></Route>
          <Route path="/board/detail" element={
            <>
            <Topmenu />
            <BoardDetail />
            </>
            }
          ></Route>
          <Route path="/board/create" element={
            <>
            <Topmenu />
            <CreateBoard />
            </>
            }
          ></Route>
          <Route path="/board/retouch" element={
            <>
            <Topmenu />
            <BoardRetouch />
            </>
            }
          ></Route>
          <Route
            path={"/join"}
            element={
              <>
                <Topmenu />
                <Join />
              </>
            }
          ></Route>
          <Route
            path={"/login"}
            element={
              <>
                <Topmenu />
                <Login />
                <LoginBar />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
