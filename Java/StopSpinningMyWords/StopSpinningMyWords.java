public class StopSpinningMyWords {
    public static void main(String[] args) {
        System.out.println(spinWords("hello the world"));
    }
    
    public static String spinWords(String sentence) {
        int i = 0;
        String word = "";
        String answer = "";
        while (i < sentence.length()) {
            if (sentence.charAt(i) == ' ' || i == sentence.length() - 1) {
                if (i == sentence.length() - 1) word += sentence.charAt(i);
                i++;
                if (answer.length() > 0) answer += ' ';
                if (word.length() > 4) {
                    answer += reverse(word);
                    word = "";
                } else {
                    answer += word;
                    word = "";
                }
            } else {
                word += sentence.charAt(i);
                i++;
            }
        }
        return answer;
    }

    public static String reverse(String word) {
        System.out.println(word);
        String answer = "";
        for (int i = word.length() - 1; i >= 0; i--) {
            answer += word.charAt(i);
        }
        System.out.println(answer);
        return answer;
    }
}