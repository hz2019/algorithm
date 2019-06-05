package Week_01.id_18;

import java.util.Stack;

/**
 * @author LiveForExperience
 * @date 2019/6/5 13:28
 */
public class LeetCode_1047_18 {
    public String removeDuplicates(String S) {
        if (S == null || "".equals(S)) {
            return S;
        }

        Stack<Character> stack = new Stack<>();
        for (char c: S.toCharArray()) {
            if (stack.isEmpty() || stack.peek() != c) {
                stack.push(c);
            } else {
                stack.pop();
            }
        }

        StringBuilder result = new StringBuilder();
        for (Character c: stack) {
            result.append(c);
        }

        return result.toString();
    }
}
