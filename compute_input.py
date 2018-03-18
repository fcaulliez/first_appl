## compute_input.py

import sys

#Read data from stdin

dict_result={}

dict_result['script']=sys.argv[0]
dict_result['val1']=sys.argv[1]
dict_result['val2']=sys.argv[2]

print dict_result
