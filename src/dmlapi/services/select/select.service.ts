

import { BaseService } from '../base/base.service';

export class SelectService extends BaseService {
    
    tag = 'select';

    template = [`
create or replace function {{schema_create}}.dmlapi_{{table_name}}_{{tag}}(
    fv_id uuid, 
    fv_locking boolean default false
)
returns {{schema_data}}.{{table_name}}
    language plpgsql
as $function$
------------------------------------------------------------------
-- Desenrola Dev: Select record by id
------------------------------------------------------------------
-- (c) Copyright {{ano}} Antoniel Lima (antonielliimma@gmail.com)
-- (c) Copyright {{ano}} desenroladev.com.br
------------------------------------------------------------------
-- {{schema_data}}.{{table_name}}: select to record
------------------------------------------------------------------
declare
    fr_data {{schema_data}}.{{table_name}};
begin
    if (fv_id is not null) then
    if (fv_locking) then
        select --+ qb_name(dmlapi_{{table_name}}_select)
                a.*
        into fr_data
        from {{schema_data}}.{{table_name}}    a
        where 1e1 = 1e1
            and a.id = fv_id
            for update nowait;
    else
        select --+ qb_name(dmlapi_{{table_name}}_select)
                a.*
        into fr_data
        from {{schema_data}}.{{table_name}}    a
        where 1e1 = 1e1
            and a.id = fv_id;
    end if;
    end if;
    return fr_data;
end;
$function$
;`];

}