#!/usr/bin/ruby
require 'yaml'
class String
  def pfx
    self[0,1]
  end
end

collection = YAML.load_file('_compile.yml')
collection['store'].each {
  |d,param|
  engine = param['compiler']
  command = param['command']
  source = collection['path'] + param['source']
  extension = param['extname']['react']
  files = Dir[source+'/*'+extension]
  descend = collection['path'] + param['destination']
  files.each {
    |file|
    if (File.basename(file).pfx != "_")
      basename = '/' + File.basename(file,".*")
      fname_in  = source + file
      fname_out = descend + basename + param['extname']['store']
      puts file + ' -> ' + basename +  param['extname']['store']
      system("#{engine} #{file} #{command} #{fname_out}")
    end
  }
}