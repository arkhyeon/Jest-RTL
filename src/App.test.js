import { fireEvent, render, screen } from "@testing-library/react";
import { logRoles } from "@testing-library/react";
import App from "./App";

test("button has correct initial color and updates when clicked button", () => {
  const { container } = render(<App />);

  logRoles(container);

  // 이름이 'Change to blue'인 버튼 요소 찾기
  const colorButton = screen.getByRole("button", { name: "Change to blue" });

  //배경색이 빨간색인지 확인
  expect(colorButton).toHaveStyle("background-color:red");

  // 버튼 클릭
  fireEvent.click(colorButton);

  // 배경이 파란색으로 변경
  expect(colorButton).toHaveStyle("background-color:blue");

  // 텍스트 변경 확인
  expect(colorButton).toHaveTextContent("Change to red");
});

// test("button turns blue when clicked", () => {
//   render(<App />);
//
//   const colorButton = screen.getByRole("button", { name: "Change to blue" });
// });
