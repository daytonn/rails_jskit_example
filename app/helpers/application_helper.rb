module ApplicationHelper
  LEXER_MAP = {
    js: Rouge::Lexers::Javascript,
    rb: Rouge::Lexers::Ruby,
    erb: Rouge::Lexers::ERB
  }.freeze

  def highlight_syntax(lang, &block)
    source = capture(&block)
    formatter = Rouge::Formatters::HTML.new(css_class: 'highlight')
    lexer = LEXER_MAP[lang].new
    formatter.format(lexer.lex(source.strip)).html_safe
  end
end
