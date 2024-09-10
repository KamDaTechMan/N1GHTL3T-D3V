import { useState } from "react";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bfstqceqylpwtdkycoxh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJmc3RxY2VxeWxwd3Rka3ljb3hoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5NDU2MjIsImV4cCI6MjA0MTUyMTYyMn0.0gMl-NUMeGg7JjiYXejMKFGNH77dWOi7D5oH4_7IDbQ';
const supabase = create
<script>
  const { createClient } = supabase
  const _supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')

  console.log('Supabase Instance: ', _supabase)
  // ...
</script>

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://bfstqceqylpwtdkycoxh.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)