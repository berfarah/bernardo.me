module SentenceHelpers
  def sentence(arr)
    case arr.length
    when 0
      ''
    when 1
      arr[0].to_s.dup
    when 2
      "#{arr[0]}#{two_words_connector}#{arr[1]}"
    else
      "#{arr[0..-2].join(words_connector)}#{last_word_connector}#{arr[-1]}"
    end
  end

  def words_connector
    ', '
  end

  def two_words_connector
    ' and '
  end

  def last_word_connector
    ', and '
  end
end
