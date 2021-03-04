#!/home/nazar/.rvm/rubies/ruby-2.6.6/bin/ruby
files = `ls ./html`


puts files



content = ""

files = files.split("\n")

files = files.collect { |s| s.strip }


files.sort.each do |file|
  content += "<a href='/html/#{file}'>#{file}</a>\n"
end


File.write("index.html", content)

