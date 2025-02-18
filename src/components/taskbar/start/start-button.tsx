import { Portal, Root } from "@radix-ui/react-dropdown-menu";

import StartButtonTrigger from "./start-button-trigger";
import StartButtonContent from "./start-button-content";

export default function StartButton() {
  return (
    <Root>
      <StartButtonTrigger />
      <Portal>
        <StartButtonContent />
      </Portal>
    </Root>
  );
}
