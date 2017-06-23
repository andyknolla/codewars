def array_diff(a, b)
  b.each do |item|
    a.delete(item)
  end
return a
end
