local m = peripheral.find("monitor")
local text="TEST"
local str=string.rep(text,2," ")
local strmax= string.len(str)-1
while(true) do
   print(string.format("%d-%d,i,j"))
   m.clear()
   m.setCursorPos(1,1)
   m.write(string.sub(str,i,j))
   if(j>strmax) then
    i=0
    j=string.len(text)-1

   end
   i=i+1
   j=J+1
   sleep(0.3)
end
