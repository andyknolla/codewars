def likes(arr)

  if arr.empty?
    "no one likes this"

  elsif arr.size == 1
    "#{arr[0]} likes this"

  elsif arr.size == 2
    "#{arr[0]} and #{arr[1]} like this"

  elsif arr.size == 3
    "#{arr[0]}, #{arr[1]} and #{arr[2]} like this"

  elsif arr.size > 3
    "#{arr[0]}, #{arr[1]} and #{arr.length - 2} others like this"
  end

end
