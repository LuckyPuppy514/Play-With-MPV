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

echo "==============================================================================="
echo "Running As Adminstrator Success"
echo "==============================================================================="
echo "添加浏览器弹窗记住选项框（仅适用于https）"
echo "add ExternalProtocolDialogShowAlwaysOpenCheckbox（support https only）"
# add reg
# chrome_edge_OpenCheckbox
$opencheckboxReg='Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome]
"ExternalProtocolDialogShowAlwaysOpenCheckbox"=dword:00000001

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Microsoft\Edge]
"ExternalProtocolDialogShowAlwaysOpenCheckbox"=dword:00000001'
echo $opencheckboxReg > chromeEdgeOpenCheckbox.reg
regedit /s chromeEdgeOpenCheckbox.reg
echo "添加成功"
echo "add success"
echo ""
echo ""

# playwithmpv protocol
echo "==============================================================================="
echo "添加自定义playwithmpv协议"
echo "add playwithmpv protocol"
$playwithmpvReg='Windows Registry Editor Version 5.00  
[HKEY_CLASSES_ROOT\PlayWithMPV]
@="PlayWithMPV Protocol"
"URL Protocol"=""

[HKEY_CLASSES_ROOT\PlayWithMPV\DefaultIcon]
@=""

[HKEY_CLASSES_ROOT\PlayWithMPV\shell]
@=""

[HKEY_CLASSES_ROOT\PlayWithMPV\shell\open]
@=""

[HKEY_CLASSES_ROOT\PlayWithMPV\shell\open\command]
@="powershell -WindowStyle Minimized '

$path=$PSScriptRoot
$path=$path.replace("\","\\")
$playwithmpvReg=$playwithmpvReg+$path+'\\playwithmpv.ps1 %1"'
echo $playwithmpvReg > playwithmpv.reg

regedit /s playwithmpv.reg
echo "添加成功"
echo "add success"
echo ""
echo ""


$mpvpath=(type env:path) -split ';' | sls mpv
echo "=============================================================================="
echo "当前环境变量MPV配置如下：" 
echo "Current Environment of MPV:" 
echo ""
echo $mpvpath
echo ""
echo ""
echo "=============================================================================="
echo "MPV版本信息如下："
echo "Current MPV version:"
mpv -version
echo ""
echo ""

echo "是否添加环境变量？（请确保目录名称为Play-With-MPV）(是：y，否：n)："
$addPathFlag = Read-Host "add mpv environment?(ensure floder name: Play-With-MPV)(yes: y，no: n)"
if($addPathFlag -eq "y"){
    echo "=============================================================================="
    echo "开始添加环境变量 ......"
    echo "start add ......"
    $path = [Environment]::GetEnvironmentVariable('Path', 'Machine')
    $mpvpath = $PSScriptRoot
    $mpvpath = $mpvpath.subString(0, $mpvpath.Length-14)
    $newpath = $path + ";" + $mpvpath
    # echo $newpath
    [Environment]::SetEnvironmentVariable('Path', $newpath, 'Machine')

    echo "添加环境变量成功"
    echo "add success"
    echo ""
    echo ""

} else {
    echo "=============================================================================="
    echo "不添加环境变量"
    echo "don't add mpv environment"
    echo ""
    echo ""
}

echo "=============================================================================="
echo "安装playwithmpv成功"
echo "install playwithmpv success"
echo "=============================================================================="

pause