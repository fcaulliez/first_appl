## compute_input.py

import sys
import json

#Read data from stdin

list_result={}
list_res={}
dict_global={}
list_result['script']=sys.argv[0]
list_result['val1']=sys.argv[1]
list_result['val2']=sys.argv[2]
list_res['val1']="vLa"
list_res['val2']="lb"

dict_global["1"]=list_result
dict_global["2"]=list_res

#print dict_result
#jsonarray = json.dumps(list_result) 
jsonarray = json.dumps(dict_global)
print jsonarray
