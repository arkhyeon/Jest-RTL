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

test('initial conditions',()=>{
  render(<App/>);
  // 버튼 활성화 상태로 시작
  const colorButton = screen.getByRole('button', {name : 'Change to blue'});
  expect(colorButton).toBeEnabled();
  // 체크박스가 체크되지 않은 상태로 시작

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
})

test("button turns disabled property when toggle checkbox", () => {
  render(<App />);

  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByLabelText('Change Disable Property')

  fireEvent.click(checkbox);
  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();

});
