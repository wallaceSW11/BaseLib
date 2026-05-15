$input_json = [Console]::In.ReadToEnd()
$event = $input_json | ConvertFrom-Json

if ($event.tool_name -eq "shell" -or $event.tool_name -eq "execute_bash" -or $event.tool_name -eq "execute_cmd") {
    $cmd = $event.tool_input.command
    if ($cmd -match "git\s+(commit|push\s+--force|reset\s+--hard|clean\s+-f)") {
        [Console]::Error.WriteLine("BLOQUEADO: comando git destrutivo ('$cmd'). Peca autorizacao ao usuario.")
        exit 2
    }
    if ($cmd -match "(DROP\s+(TABLE|DATABASE|SCHEMA))|(DELETE\s+FROM)|(TRUNCATE)" ) {
        [Console]::Error.WriteLine("BLOQUEADO: comando destrutivo no banco ('$cmd'). Peca autorizacao ao usuario.")
        exit 2
    }
}

exit 0
