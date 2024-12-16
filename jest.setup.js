import "@testing-library/jest-dom";
import { configure } from "@testing-library/react";

jest.mock("next/image", () => {
  const MockedImage = ({ src, alt, fetchPriority, ...props }) => {
    return (
      <img src={src} alt={alt} data-fetch-priority={fetchPriority} {...props} />
    );
  };
  MockedImage.displayName = "MockedImage";
  return MockedImage;
});
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
