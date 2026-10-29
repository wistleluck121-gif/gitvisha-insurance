import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { FloatingChatbot } from "@/components/chatbot/floating-chatbot";

// Mock @tanstack/react-router
vi.mock("@tanstack/react-router", () => ({
  Link: ({ children, to, ...props }: any) => (
    <a href={to} {...props}>
      {children}
    </a>
  ),
  useNavigate: () => vi.fn(),
}));

describe("FloatingChatbot component", () => {
  it("renders the floating chat button in the bottom right", () => {
    render(<FloatingChatbot />);
    const triggerBtn = screen.getByRole("button", { name: /Open Gitvisha Chatbot/i });
    expect(triggerBtn).toBeInTheDocument();
    expect(screen.getByText(/Need insurance advice\?/i)).toBeInTheDocument();
  });

  it("opens the chat window when trigger button is clicked", async () => {
    render(<FloatingChatbot />);
    const triggerBtn = screen.getByRole("button", { name: /Open Gitvisha Chatbot/i });
    fireEvent.click(triggerBtn);

    expect(await screen.findByText("Gitvisha Assistant")).toBeInTheDocument();
    expect(screen.getByText("AI Advisor")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Ask about quotes, claims, policies\.\.\./i)).toBeInTheDocument();
  });

  it("sends a message and responds", async () => {
    render(<FloatingChatbot />);
    const triggerBtn = screen.getByRole("button", { name: /Open Gitvisha Chatbot/i });
    fireEvent.click(triggerBtn);

    const input = screen.getByPlaceholderText(/Ask about quotes, claims, policies\.\.\./i);
    const sendBtn = screen.getByLabelText(/Send message/i);

    fireEvent.change(input, { target: { value: "Tell me about car insurance" } });
    fireEvent.click(sendBtn);

    expect(screen.getByText("Tell me about car insurance")).toBeInTheDocument();

    await waitFor(
      () => {
        expect(screen.getByText(/Gitvisha Motor Insurance Advisory/i)).toBeInTheDocument();
      },
      { timeout: 2000 },
    );
  });
});
