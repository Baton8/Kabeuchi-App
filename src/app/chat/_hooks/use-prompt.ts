import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const defaultPrompt = "";

const promptAtom = atomWithStorage("prompt", defaultPrompt);

export function usePrompt() {
  const [prompt, setPrompt] = useAtom(promptAtom);

  return { prompt, setPrompt };
}
