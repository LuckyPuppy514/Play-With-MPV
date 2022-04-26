# run as admin
$currentWi = [Security.Principal.WindowsIdentity]::GetCurrent()
$currentWp = [Security.Principal.WindowsPrincipal]$currentWi
if( -not $currentWp.IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator))
{
    $boundPara = ($MyInvocation.BoundParameters.Keys | foreach{'-{0} {1}' -f  $_ ,$MyInvocation.BoundParameters[$_]} ) -join ' '
    $currentFile = $MyInvocation.MyCommand.Definition
    $fullPara = $boundPara + ' ' + $args -join ' '
    Start-Process "$psHome\powershell.exe"   -ArgumentList "$currentFile $fullPara"   -verb runas
    return
}

# delete reg
echo "=========================================================================================="
echo "正在删除注册表信息 ......"
echo "delete reg ......"
echo ""
echo ""
echo "=========================================================================================="
echo "删除所有playwithmpv协议注册表，按y即可"
echo "delete all playwithmpv reg, press y"
echo ""

Remove-ItemProperty HKLM:\SOFTWARE\Policies\Google\Chrome -Name ExternalProtocolDialogShowAlwaysOpenCheckbox -Force -Verbose
Remove-ItemProperty HKLM:\SOFTWARE\Policies\Microsoft\Edge -Name ExternalProtocolDialogShowAlwaysOpenCheckbox -Force -Verbose
Remove-Item Registry::HKCR\PlayWithMPV -Force -Verbose

echo ""
echo ""
echo "=========================================================================================="
echo "删除成功"
echo "uninstall success"
echo "=========================================================================================="

pause
